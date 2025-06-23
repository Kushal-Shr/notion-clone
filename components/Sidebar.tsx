import React from 'react'
import { Button } from './ui/button'
import NewDocumentButton from './NewDocumentButton'
import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet"
import { MenuIcon } from 'lucide-react'

const Sidebar = () => {

  const menuOptions = (
    <>
      <NewDocumentButton />

      {/* My Documents */}
      {/* List... */}

      {/* Shared Documents */}
      {/* List... */}
    </>
  )

  return (
    <div className='p-2 md:p-5 bg-gray-200 relative'>
      <div className='md:hidden flex items-center justify-center'>

      <Sheet>
  <SheetTrigger>
    <MenuIcon />
  </SheetTrigger>
  <SheetContent side='left'>
    <SheetHeader>
      <SheetTitle>Menu</SheetTitle>
      <div>
        {menuOptions}
      </div>
    </SheetHeader>
  </SheetContent>
</Sheet>

</div>
<div className='hidden md:inline'>
  {menuOptions}
</div>
    </div>
  )
}

export default Sidebar
