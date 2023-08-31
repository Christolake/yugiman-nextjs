'use client'

import {  Navbar,   NavbarBrand,   NavbarContent,   NavbarItem,   NavbarMenuToggle,  NavbarMenu,  NavbarMenuItem} from "@nextui-org/navbar";
import {Link} from "@nextui-org/link";
import {Button, ButtonGroup} from "@nextui-org/button";
import { GiAnubis } from "react-icons/gi";
import { useRouter } from "next/navigation";

export default function Navigation() {

  const router = useRouter()

    return (
      <Navbar>
        <NavbarBrand>
          <Link onClick={() => router.push(`/`)}>
          <GiAnubis />
          <p className="font-bold text-inherit">YUGIMAN</p>
          </Link>
        </NavbarBrand>
        <NavbarContent className="hidden sm:flex gap-4" justify="center">
          <NavbarItem>
            <Link color="foreground" href="#">
              Features
            </Link>
          </NavbarItem>
          <NavbarItem>
            <Link onClick={() => router.push(`/collections`)}>
              Collections
            </Link>
          </NavbarItem>
          <NavbarItem>
            <Link color="foreground" onClick={() => router.push(`/calculator`)}>
              LP Calculator
            </Link>
          </NavbarItem>
        </NavbarContent>
        <NavbarContent justify="end">
          <NavbarItem className="hidden lg:flex">
            <Link href="#">Login</Link>
          </NavbarItem>
          <NavbarItem>
            <Button as={Link} color="primary" href="#" variant="flat">
              Sign Up
            </Button>
          </NavbarItem>
        </NavbarContent>
      </Navbar>
    );
  }