const Parent = () => {
  const childRef = useRef();

  const doSometing = e => {
    console.log(" e", e, " ref: ", childRef);
    // childRef.current.printSomething();
  };

  return (
    <div>
      <Child ref={childRef} />
      <button onClick={doSometing}>Click</button>
    </div>
  );
};

export default Parent;
