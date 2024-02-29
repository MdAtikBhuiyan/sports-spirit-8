import { getItemFromStorage } from "../../utilities/localStorage";
import CartCard from "./CartCard";
import notYetImg from '../../assets/images/notYet.jpg'

const MyCarts = () => {

    const cartsData = getItemFromStorage()

    return (
        <div className="w-[80%] min-h-[70vh] mx-auto my-32">
            <div className="w-full ">
                {
                    cartsData.length ? <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
                        {
                            cartsData?.map(cart => <CartCard key={cart.id} cartItem={cart} />)
                        }
                    </div>
                        :
                        <div className=" w-full flex flex-col justify-center items-center">
                            <img src={notYetImg} className="max-w-xs rounded-xl" alt="" />
                            <h1 className="text-4xl text-[#ffad14] font-bold mt-6">No Cart Yet</h1>
                        </div>

                }
            </div>
        </div>
    );
};

export default MyCarts;