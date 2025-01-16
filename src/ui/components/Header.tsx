function Header() {

  const handleMinimize = () => {
    // @ts-ignore
    if (window.electronAPI) {
       // @ts-ignore
      window.electronAPI.minimizeWindow();
    } else {
      console.error('electronAPI is not available');
    }
  };

  const handleClose = () => {
    // @ts-ignore
    if (window.electronAPI) {
      // @ts-ignore
      window.electronAPI.closeWindow();
    } else {
      console.error('electronAPI is not available');
    }
  };

  const handleMaximize =()=>{
    // @ts-ignore
    if(window.electronAPI){
      // @ts-ignore
      window.electronAPI.maximizeWindow();
    }
    else{
      console.error('electronAPI is not available')
    }
  }

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
        <div className="text-white w-1/3 text-center" onClick={handleMaximize}>[]</div>
        <div className="text-white w-1/3 text-center" onClick={handleClose}>
          X
        </div>
      </div>
    </div>
  );
}

export default Header;
