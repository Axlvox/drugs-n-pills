import React from 'react'
import { FacebookLogo, InstagramLogo, LinkedinLogo } from '@phosphor-icons/react'

function Footer() {
 
  

  return (
    <>
        <div className="flex justify-center bg-yellow-400 text-black">
          <div className="container flex flex-col items-center py-4">
            <p className='text-xl font-bold'>Drugs N' Pills - Farmácia</p>
            <p className='text-lg'>Acesse nossas redes sociais</p>
            <div className='flex gap-2'>
            <a href="https://www.linkedin.com/in/leandrojlds">
  <LinkedinLogo size={48} weight='bold' />
</a>

<a href="https://www.instagram.com/leandro.jpg">
  <InstagramLogo size={48} weight='bold' />
</a>

<a href="https://www.facebook.com/Axlvox">
  <FacebookLogo size={48} weight='bold' />
</a>

            </div>
          </div>
        </div>
      </>
  )
}

export default Footer