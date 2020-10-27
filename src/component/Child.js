const Child = forwardRef((props, ref) => {
  const printSomething = () => {
    console.log("printing from child function");
  };
  useImperativeHandle(ref, () => ({
    printSomething: printSomething
  }));

  return <h1>Child Component</h1>;
});

export default Child;
