const CompareItemSlots = () => {



  return (
    <>
      <div className="compare-item-slots-container h-full w-full">

        <div className="item-slots-1 flex flex-col  w-full h-1/2 items-center">
          
            <div className="HTS-slots-1 w-full h-1/3 item-center flex flex-row mt-1">
              <div className="bg-[url(assets/headSlot-sm.png)] w-[60px] h-[60px] mx-1"></div>
              <div className="bg-[url(assets/torsoSlot-sm.png)] w-[60px] h-[60px] mx-1"></div>
              <div className="bg-[url(assets/armSlot-sm.png)] w-[60px] h-[60px] mx-1"></div>
            </div>

            <div className="LSH-slots-1 w-full h-1/3 item-center flex flex-row mt-1">
              <div className="bg-[url(assets/legSlot-sm.png)] w-[60px] h-[60px] mx-1"></div>
              <div className="bg-[url(assets/shouldersSlot-sm.png)] w-[60px] h-[60px] mx-1"></div>
              <div className="bg-[url(assets/handSlot-sm.png)]  w-[60px] h-[60px] mx-1"></div>
            </div>

            <div className="misc-slots-1 w-full h-1/3 item-center flex flex-row mt-1">
              <div className="bg-[url(assets/miscSlot-sm.png)] w-[60px] h-[60px] mx-1"></div>
              <div className="bg-[url(assets/miscSlot-sm.png)] w-[60px] h-[60px] mx-1"></div>
              <div className="bg-[url(assets/miscSlot-sm.png)] w-[60px] h-[60px] mx-1"></div>
          </div>

            <div className="weapon-slot-1 w-full h-1/3 item-center flex flex-row mt-1">
              <div className="bg-[#1f2533] opacity-50 w-[200px] h-[60px] mx-1 rounded-lg"></div>
            </div>
          
        </div>

        <div className="item-slots-2 flex flex-col w-full h-1/2 items-center">
          
          <div className="HTS-slots-2 w-full h-1/3 item-center flex flex-row mt-1">
            <div className="bg-[url(assets/headSlot-sm.png)] w-[60px] h-[60px] mx-1"></div>
            <div className="bg-[url(assets/torsoSlot-sm.png)] w-[60px] h-[60px] mx-1"></div>
            <div className="bg-[url(assets/armSlot-sm.png)] w-[60px] h-[60px] mx-1"></div>
          </div>

          <div className="LSH-slots-2 w-full h-1/3 item-center flex flex-row mt-1">
            <div className="bg-[url(assets/legSlot-sm.png)] w-[60px] h-[60px] mx-1"></div>
            <div className="bg-[url(assets/shouldersSlot-sm.png)] w-[60px] h-[60px] mx-1"></div>
            <div className="bg-[url(assets/handSlot-sm.png)]  w-[60px] h-[60px] mx-1"></div>
          </div>

          <div className="misc-slots-2 w-full h-1/3 item-center flex flex-row mt-1">
            <div className="bg-[url(assets/miscSlot-sm.png)] w-[60px] h-[60px] mx-1"></div>
            <div className="bg-[url(assets/miscSlot-sm.png)] w-[60px] h-[60px] mx-1"></div>
            <div className="bg-[url(assets/miscSlot-sm.png)] w-[60px] h-[60px] mx-1"></div>
          </div>

          <div className="weapon-slot-2 w-full h-1/3 item-center flex flex-row mt-1">
            <div className="bg-[#1f2533] opacity-50 w-[200px] h-[60px] mx-1 rounded-lg"></div>
          </div>
        
      </div>
        
      </div>
    </>
  )

};


export default CompareItemSlots;