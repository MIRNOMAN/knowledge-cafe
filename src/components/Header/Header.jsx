import profile from '../../assets/images/profile.png'

const Header = () => {
    return (
        <div className='flex justify-between mt-5 p-4 items-center border-b-2 max-w-6xl mx-auto'>
           <h1 className='text-3xl'>Knowladge Cafe </h1> 
           <img src={profile} alt="" />
        </div>
    );
};

export default Header;