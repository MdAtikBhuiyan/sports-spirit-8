
const SportSlide = ({ sport }) => {

    const { img, sports_title } = sport;
    
    return (
        <div className='relative'>
            <img className='w-full md:w-full h-[250px] md:h-[400px] object-cover rounded-lg' src={img} alt="" />
            <p className='absolute bottom-0 left-0 bg-[#4c535849] w-full h-full text-4xl text-[#fff] font-bold'>
                <span>
                    {sports_title}
                </span>
            </p>
        </div>
    );
};

export default SportSlide;