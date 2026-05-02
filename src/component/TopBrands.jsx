import { Card } from '@heroui/react';
import React from 'react';

const TopBrands = () => {
    return (
        <div className='grid grid-cols-1 px-27 lg:px-0 lg:grid-cols-4 gap-4 '>
            <Card className="w-70  bg-white borderborder-orange-100 shadow-md hover:shadow-xl hover:-translate-y-2 transition-all" variant="secondary ">
                <p>🕶️</p>
        <Card.Header>
          <Card.Title className='text-slate-900 text-xl font-bold pb-3'>Premium UV Protection</Card.Title>
          <Card.Description className=''>Stylish sunglasses designed for maximum comfort and sun protection.</Card.Description>
        </Card.Header>
        {/* <Card.Description>
          <p >Use to draw moderate attention</p>
        </Card.Description> */}
      </Card>
            <Card className="w-70 bg-white borderborder-orange-100 shadow-md hover:shadow-xl hover:-translate-y-2 transition-all" variant="secondary">
                <p>🧴</p>
        <Card.Header>
          <Card.Title className='text-slate-900 text-xl font-bold pb-3'>Healthy Summer Skin</Card.Title>
          <Card.Description className=''>Skincare essentials that keep your skin hydrated and protected all summer.</Card.Description>
        </Card.Header>
        {/* <Card.Description>
          <p >Use to draw moderate attention</p>
        </Card.Description> */}
      </Card>
            <Card className="w-70 bg-white borderborder-orange-100 shadow-md hover:shadow-xl hover:-translate-y-2 transition-all" variant="secondary">
                <p>👕</p>
        <Card.Header>
          <Card.Title className='text-slate-900 text-xl font-bold pb-3'>Summer Style Redefined</Card.Title>
          <Card.Description className=''>Lightweight trendy outfits built for comfort and summer fashion.</Card.Description>
        </Card.Header>
        {/* <Card.Description>
          <p >Use to draw moderate attention</p>
        </Card.Description> */}
      </Card>
            <Card className="w-70 bg-white borderborder-orange-100 shadow-md hover:shadow-xl hover:-translate-y-2 transition-all" variant="secondary">
                <p>🏖️</p>
        <Card.Header>
          <Card.Title className='text-slate-900 text-xl font-bold pb-3'>Comfort Meets Style</Card.Title>
          <Card.Description className=''>Premium towels, bags, and accessories for your beach lifestyle.</Card.Description>
        </Card.Header>
        {/* <Card.Description>
          <p >Use to draw moderate attention</p>
        </Card.Description> */}
      </Card>
            
        </div>
    );
};

export default TopBrands;