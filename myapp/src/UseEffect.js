import React, { useEffect, useState } from "react";

function UseEffect() {
  const [count, setCount] = useState(0);
  useEffect(() => {
    setTimeout(() => {
      setCount(count + 1);
    }, 1000);
  }, [count]);

  return (
    <div>
      <h1>I have rendered {count} times!!</h1>
    </div>
  );
}

export default UseEffect;
