import React from 'react';

const ProfileCard = ({
    name,
    age,
    city,
    followersCount,
    likesCount,
    photosCount
}) => {
    return (
        <div className="bg-white shadow-lg rounded-lg overflow-hidden  w-[280px] h-[300px]">
            <div className="px-4 py-2 border-b-2 flex justify-center h-[60px] pt-8 mt-12">
                <img src="#" alt="#" className="w-12 h-12 bg-black rounded-full border-red-600 border-2" />
            </div>
            <div className="px-4 pt-8 flex justify-center ">
                <b className="text-lg mx-2">{name}</b>
                <p className="text-sm flex items-center">{age}</p>
            </div>
            <div className='pt-4'>
                <p className="text-sm">{city}</p>
            </div>
            <div className="px-4 py-2 border-t-2 mt-4 flex justify-center ">
                <span className="mx-5 flex-col ">
                    <p className='font-medium'>{followersCount}</p>
                    <p className='text-sm'>Followers</p>
                </span>
                <span className="mx-5 flex-col">
                    <p className='font-medium'> {likesCount}</p>
                    <p className='text-sm'>Likes</p>
                </span>
                <span className='mx-5 flex-col'>
                    <p className='font-medium'>{photosCount}</p>
                    <p className='text-sm'>Photos</p>
                </span>
            </div>
        </div>
    );
};

export default ProfileCard;
