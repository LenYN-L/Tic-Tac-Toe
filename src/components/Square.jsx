export const Squere = ({ children, isSelected, updateBoard, index }) => {
  const numberRandom1 = Math.ceil(Math.random() * 250)
  const numberRandom2 = Math.ceil(Math.random() * 250)
  const numberRandom3 = Math.ceil(Math.random() * 250)

  console.log(numberRandom1)
  const className = `square ${isSelected ? "is-selected" : ""}`;
  const handleClick = () => {
    updateBoard(index);
  };
  return (
    <div onClick={handleClick} className={className} style={{border: `2px solid rgba(${numberRandom1}, ${numberRandom2}, ${numberRandom3}, 1)`}}>
      {children}
    </div>
  );
};
