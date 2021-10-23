import React, { ChangeEvent, DragEvent, FC, MouseEvent, useRef, useState } from "react";

const EventsExsample: FC = () => {
  const [value, setValue] = useState<string>("");
  const [isDrag, setIsDrag] = useState<boolean>(false)

  const inputRef = useRef<HTMLInputElement>(null)

  const changeHandler = (e: ChangeEvent<HTMLInputElement>) => {
    setValue(e.target.value);
  };

  const clickHandler = (e: MouseEvent<HTMLButtonElement>) => {
    console.log(inputRef.current?.value)
  };

  const dragHandler = (e: DragEvent<HTMLDivElement>) => {
    console.log("draggle");
  };


  const dragWithPreventHandler = (e: DragEvent<HTMLDivElement>) => {
    e.preventDefault()
    setIsDrag(true)
  }


  const leaveHandler = (e: DragEvent<HTMLDivElement>) => {
    e.preventDefault()
    setIsDrag(false)
  }


  const dropHandler = (e: DragEvent<HTMLDivElement>) => {
    e.preventDefault()
    setIsDrag(false)
  }

  return (
    <div>
      <input value={value} onChange={changeHandler} type="text" placeholder='Управляемый' />
      <input ref={inputRef} type="text" placeholder='Неуправляемый'/>
      <button onClick={clickHandler}>Button</button>
      <div
        onDrag={dragHandler}
        draggable
        style={{ height: 200, width: 200, background: "red" }}
      ></div>
      <div
        onDrop={dropHandler}
        onDragLeave={leaveHandler}
        onDragOver={dragWithPreventHandler}
        style={{
          height: 200,
          width: 200,
          background: isDrag ? 'blue' : 'red',
          marginTop: 20,
        }}
      ></div>
    </div>
  );
};

export default EventsExsample;
