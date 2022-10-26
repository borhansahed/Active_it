import Sidebar from "./Sidebar";




const Layout: React.FC<any> = ({children}) => {
    // const active = '  border border-gray-300   rounded-xl mt-10 h-screen'
    return (
       <div className="ml-8 ">
         {/* <div className="ml-5">
                <h1 style={{ color: '#79b158' }} className="lg:text-5xl text-4xl  font-black mb-0  ">
                    Active <span className="text-gray-300 text-2xl lg:text-4xl">-IT</span> </h1>
            </div> */}
         <div className="mt-8 flex ">
        <div className= 'border border-gray-300   rounded-xl mt-10 h-screen shadow-2xl' >
            
              <Sidebar/>  
            
            
        </div>
        <div className="flex  flex-1 border  border-gray-300 rounded-lg ml-14 mr-14 py-6 px-6">
             {children}
        </div>
        
       </div>
       </div>
      
    );
};

export default Layout;
