'use client';
import { LucideIcon } from 'lucide-react';
import { usePathname } from 'next/navigation';
import { useRouter } from 'next/router';
import React from 'react';

interface SideBarItemProps {
  icon: LucideIcon;
  label: string;
  href: string;
}

const SideBarItem = ({ icon: Icon, label, href }: SideBarItemProps) => {
  const pathName = usePathname();
  const router = useRouter();

  return <div>SideBarItem</div>;
};

export default SideBarItem;
