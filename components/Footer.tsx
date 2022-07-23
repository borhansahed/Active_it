

const Footer = () => {
    const date: any = new Date();
    let year:any = date.getFullYear();
    return (
      <>
      <div style={{backgroundColor: '#6d9853'}} className="mt-32 pt-24 pb-2">
      <div  className="flex justify-evenly mb-20">
        <div>
        <h1 className="text-3xl text-white font-medium">
            Let`s handle your <br />
            project, professionally.
        </h1>
        <p className="mt-5 text-white ">The smallest company in the  world can look <br /> as large as the  largest company in the web. <br />
        - Steve Jobs </p>
        </div>
        <div className="flex flex-col gap-y-6">
        <input  className="p-2 w-96 text-black rounded-sm" type="email" placeholder="Your email address" name="email" id="" required />
        <input className="p-2 text-black rounded-sm" type="text" placeholder="Your name / company's name" name="name" id="" required />
  

  <textarea  className=" p-3 h-52 text-black rounded-sm" name="text" id="" placeholder="Your message"></textarea>
        
        {/* <input style={{ 
  height: '150px'}}  type="textarea" placeholder="Your message" required  /> */}
        <input className=" text-white" type="button" value="Submit" />
        </div>
      </div>
      <p className="text-white text-center ">&copy;CopyRight by Active-It {year}</p>
      </div>
     
      </>
    );
};

export default Footer;