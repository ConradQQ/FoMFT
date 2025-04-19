const ToolTip = (toolTipItem) => {

console.log(toolTipItem);

  return (
    <>
      <div className='w-fit h-fit absolute top-0 left-0 bg-indigo-400 rounded-lg opacity-80'>
       {Object.entries(toolTipItem.toolTipItem).map(([statName, statValue]) => (
          <>
            <p key={statName} className="sm:text-[12px] lg:text-xl">
              {statName}: {statValue}
            </p>
          </> 
        ))}
 
      </div>
    
    </>



  )
};


export default ToolTip;
