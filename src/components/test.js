import React, { useState, useEffect, useRef } from "react"
// import useKeypress from "../hooks/useKeypress"
// import useOnClickOutside from "../hooks/useOnClickOutside"
import '../App.css';


// Hook
function useKeypress(targetKey) {
  // State for keeping track of whether key is pressed
  const [keyPressed, setKeyPressed] = useState(false);

  // If pressed key is our target key then set to true
  function downHandler({ key }) {
    if (key === targetKey) {
      setKeyPressed(true);
    }
  }

  // If released key is our target key then set to false
  const upHandler = ({ key }) => {
    if (key === targetKey) {
      setKeyPressed(false);
    }
  };



  // Add event listeners
  useEffect(() => {
    window.addEventListener('keydown', downHandler);
    window.addEventListener('keyup', upHandler);
    // Remove event listeners on cleanup
    return () => {
      window.removeEventListener('keydown', downHandler);
      window.removeEventListener('keyup', upHandler);
    };
  }, []); // Empty array ensures that effect is only run on mount and unmount

  return keyPressed;
}

function useOnClickOutside(ref, handler) {
  useEffect(
    () => {
      const listener = event => {
        // Do nothing if clicking ref's element or descendent elements
        if (!ref.current || ref.current.contains(event.target)) {
          return;
        }

        handler(event);
      };

      document.addEventListener('mousedown', listener);
      document.addEventListener('touchstart', listener);

      return () => {
        document.removeEventListener('mousedown', listener);
        document.removeEventListener('touchstart', listener);
      };
    },
    // Add ref and handler to effect dependencies
    // It's worth noting that because passed in handler is a new ...
    // ... function on every render that will cause this effect ...
    // ... callback/cleanup to run every render. It's not a big deal ...
    // ... but to optimize you can wrap handler in useCallback before ...
    // ... passing it into this hook.
    [ref, handler]
  );
}


function InlineEdit(props) {
  const [isInputActive, setIsInputActive] = useState(false)
  const [inputValue, setInputValue] = useState(props.text)
  const wrapperRef = useRef(null)
  const textRef = useRef(null)
  const inputRef = useRef(null)
  const enter = useKeypress("Enter")
  const esc = useKeypress("Escape")
  // check to see if the user clicked outside of this component
  useOnClickOutside(wrapperRef, () => {
    if (isInputActive) {
      props.onSetText(inputValue)
      setIsInputActive(false)
    }
  })
  // focus the cursor in the input field on edit start
  useEffect(() => {
    if (isInputActive) {
      inputRef.current.focus()
    }
  }, [isInputActive])
  useEffect(() => {
    if (isInputActive) {
      // if Enter is pressed, save the text and case the editor
      if (enter) {
        props.onSetText() /*(inputValue)*/
        setIsInputActive(false)
      }
      // if Escape is pressed, revert the text and close the editor
      if (esc) {
        setInputValue(props.text)
        setIsInputActive(false)
      }
    }
  }, [enter, esc]) // watch the Enter and Escape key presses
  return (
    <span className="inline-text" ref={wrapperRef}>
      <span
        ref={textRef}
        onClick={() => setIsInputActive(true)}
        className={`inline-text_copy inline-text_copy--${!isInputActive ? "active" : "hidden"}`}
      >
        {props.text}
      </span>
      <input
        ref={inputRef}
        // set the width to the input length multiplied by the x height
        // it's not quite right but gets it close
        style={{ width: Math.ceil(inputValue.length * 0.9) + "ex" }}
        value={inputValue}
        onChange={(e) => {
          setInputValue(e.target.value)
        }}
        className={`inline-text_input inline-text_input--${isInputActive ? "active" : "hidden"}`}
      />
    </span>
  )
}
export default InlineEdit