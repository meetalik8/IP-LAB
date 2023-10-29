import React, { useRef, forwardRef } from "react";
import "./App.css"; 

const ChildComponent = forwardRef((props, ref) => {
  const handleBlur = () => {
    alert(`Input Value: ${ref.current.value}`);
    ref.current.style.backgroundColor = "yellows";
  };

  return (
    <div className="child-component">
      <input
        ref={ref}
        placeholder="Forward reference example"
        onBlur={handleBlur}
        onFocus={() => (ref.current.style.backgroundColor = "white")}
      />
      <button onClick={() => ref.current.focus()}>Focus Input</button>
    </div>
  );
});

const ParentComponent = () => {
  const inputRef = useRef(null);

  return (
    <div className="parent-component">
      <h2>Forward Reference Example</h2>
      <ChildComponent ref={inputRef} />
    </div>
  );
};

export default ParentComponent;
