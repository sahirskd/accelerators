"use client"

import {
    NavigationMenu,
    NavigationMenuContent,
    NavigationMenuItem,
    NavigationMenuLink,
    NavigationMenuList,
    NavigationMenuTrigger,
    navigationMenuTriggerStyle
} from "@/components/ui/navigation-menu"
import { twJoin } from "tailwind-merge"
import TechnologyNews from "./TechnologyNew"
import TechnologyOverview from "./TechnologyOverview"

export function HeaderNavigationLinks() {
    return (
        <NavigationMenu>
            <NavigationMenuList>
                <NavigationMenuItem content="none">
                    <NavigationMenuLink href="#" className={`${twJoin("text-white hover:text-white text-base font-medium self-start ")} ${navigationMenuTriggerStyle()}`}>About Us</NavigationMenuLink>
                </NavigationMenuItem>

                <NavigationMenuItem >
                    <NavigationMenuLink href="#" className={`${twJoin("text-white hover:text-white text-base font-medium self-start ")} ${navigationMenuTriggerStyle()}`}>Solutions</NavigationMenuLink>
                </NavigationMenuItem>

                <NavigationMenuItem >
                    <NavigationMenuTrigger className="text-white hover:text-white text-base font-medium self-start bg-transparent hover:bg-transparent">Technology</NavigationMenuTrigger>
                    <NavigationMenuContent className="min-w-[850px]">
                        <NavigationMenuLink>
                            <div className="flex">
                                <TechnologyNews />
                                <TechnologyOverview />
                            </div>
                        </NavigationMenuLink>
                    </NavigationMenuContent>
                </NavigationMenuItem>

                <NavigationMenuItem >
                    <NavigationMenuTrigger className="text-white hover:text-white text-base font-medium self-start bg-transparent hover:bg-transparent">More</NavigationMenuTrigger>
                    <NavigationMenuContent className="min-w-[850px]">
                        <NavigationMenuLink>
                            <div className="flex">
                                <TechnologyNews />
                                <TechnologyOverview />
                            </div>
                        </NavigationMenuLink>
                    </NavigationMenuContent>
                </NavigationMenuItem>



            </NavigationMenuList>
        </NavigationMenu>

    )
}

