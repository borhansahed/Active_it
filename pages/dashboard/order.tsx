import { Input} from "@nextui-org/react";
import toast, { Toaster } from 'react-hot-toast';
import Layout from "../../components/Layout";
import style1 from '../../styles/order.module.css'


const myService = () => {
    const handleSubmit = () =>{
         console.log("hello Submitted")
        toast.success('Successfully Submitted!');
    }
   
    return (
        
        <div className="ml-5 ">
            <Layout>

                <h1 className="text-4xl font-bold  text-gray-300">Order</h1>
                <div className="flex justify-center mt-36">
                    <div className="">


                        <div className={style1.order}>

                            <div className={style1.container}>

                                <div className="flex flex-col gap-y-14 ">
                                    <Input  className="bg-gray-300"  labelPlaceholder="Name"
                                    css={{ color: '$gray300'}}
                                    clearable bordered  size="lg"   
                                    />

                                    <Input   className="bg-gray-300"  clearable bordered labelPlaceholder="Email"
                                    size="lg"
                                    />

                                    <Input className="bg-gray-300 " clearable bordered labelPlaceholder="Service" 
                                     size="lg"
                                    />

                                    <div>
                                    <Input  className="bg-gray-300 w-80"  clearable bordered labelPlaceholder="Price"size="lg"/>
                                        <input   className={style1.file} type="file" title=" "
                                        
                                        />

                                    </div>


                                    <input  onClick={handleSubmit} className={style1.orderButton} type="button" value="Submit" />
                                </div>


                                <Toaster />

                            </div>

                        </div>
                    </div>

                </div>
            </Layout>

        </div>

    );
};

export default myService;