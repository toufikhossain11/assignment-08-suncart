"use client";
import { UpdateProfile } from '@/component/UpdateProfile';
import { authClient } from '@/lib/auth-client';
import { Avatar, Card } from '@heroui/react';

const profilePage = () => {
    const userData = authClient.useSession()
    const user = userData.data?.user
    return (
        <div>
            <Card className='w-70 mx-auto mt-6 flex justify-center items-center'>
                <Avatar className='w-20 h-20'>
                    <Avatar.Image alt="John Doe" src={user?.image} referrerPolicy='no-referrer' />
                    <Avatar.Fallback>{user?.name[0]}</Avatar.Fallback>
                </Avatar>
                <h2 className='font-bold text-xl'>{user?.name}</h2>
                <p className='text-muted'>{user?.email}</p>
                <UpdateProfile></UpdateProfile>
            </Card>
        </div>
    );
};

export default profilePage;