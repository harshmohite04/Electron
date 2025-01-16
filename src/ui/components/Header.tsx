function Header() {
  
  const handleMinimize = () => {
    if (window.electronAPI) {
      window.electronAPI.minimizeWindow();
    } else {
      console.error('electronAPI is not available');
    }
  };

  return (
    <div className="flex bg-black justify-between">
      <div className="text-white">CODE AI</div>
      <div className="flex w-1/12">
        <div
          className="text-white w-1/3 text-center cursor-pointer"
          onClick={handleMinimize}
        >
          -
        </div>
        <div className="text-white w-1/3 text-center">[]</div>
        <div className="text-white w-1/3 text-center" onClick={() => {}}>
          X
        </div>
      </div>
    </div>
  );
}

export default Header;
