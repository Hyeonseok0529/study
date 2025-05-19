function MemoItem({ children, onClicItem, isSelected, onClickDelete }) {
  return (
    <div className={'MemoItem'+ (isSelected?'selected' : '')} onClick={onClicItem}>
      {children}
      <button className="MemoItem_delete-button" onClick={onClickDelete}>X</button>
    </div>
  );
}

export default MemoItem;
