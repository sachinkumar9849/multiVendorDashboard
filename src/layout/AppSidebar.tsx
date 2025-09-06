"use client";
import React, { useEffect, useRef, useState, useCallback } from "react";
import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { useSidebar } from "../context/SidebarContext";
import { ChevronDownIcon, GridIcon, HorizontaLDots } from "../icons/index";

import { ShoppingBasket, ShoppingCart, Tag, User, Store } from "lucide-react";

type NavItem = {
  name: string;
  icon: React.ReactNode;
  path?: string;
  subItems?: { name: string; path: string; pro?: boolean; new?: boolean }[];
};

type MenuType = "main" | "products" | "marketplace" | "users";

const navItems: NavItem[] = [
  {
    icon: <GridIcon />,
    name: "Dashboard",
    path: "/",
  },
  {
    name: "Orders",
    icon: <ShoppingCart />,
    subItems: [
      { name: "All", path: "/order/list-all", pro: false },
      // { name: "Pending", path: "/order-list-pending", pro: false },
      // { name: "Confirmed", path: "/order-list-confirmed", pro: false },
      // { name: "Packaging", path: "/order-list-packaging", pro: false },
      // { name: "Delivered", path: "/order-list-delivery", pro: false },
      // { name: "Returned", path: "/order-list-returned", pro: false },
      // { name: "Failed To Deliver", path: "/order-list-failed", pro: false },
      // { name: "Canceled", path: "/order-list-canceled", pro: false },
    ],
  },
  // {
  //   name: "Refund Request",
  //   icon: <Refrigerator />,
  //   subItems: [{ name: "Pending", path: "/refund-pending", pro: false }, { name: "Approved", path: "/refund-approved", pro: false },
  //   { name: "Refunded", path: "/refund-refunded", pro: false },
  //   { name: "Rejected", path: "/refund-rejected", pro: false },
  //   ],
  // }
];

const othersItems: NavItem[] = [
  {
    icon: <ShoppingBasket />,
    name: "Products",
    subItems: [
      { name: "Product List", path: "/products/list-all", pro: false },
      { name: "Add Product", path: "/products/add-product", pro: false },
      // {
      //   name: "Approved Product List",
      //   path: "/products/list-approved",
      //   pro: false,
      // },
      // {
      //   name: "New Product Request",
      //   path: "/products/list-new-request",
      //   pro: false,
      // },
      // {
      //   name: "Denied Product Request",
      //   path: "/products/list-denied",
      //   pro: false,
      // },
      // { name: "Add New Product", path: "/products-add", pro: false },
    ],
  },
  {
    icon: <GridIcon />,
    name: "Category Setup",
    subItems: [
      { name: "Categories", path: "/categories", pro: false },
      { name: "Sub Categories", path: "/sub-categories", pro: false },
      { name: "Sub Sub Categories", path: "/sub-sub-categories", pro: false },
    ],
  },
  {
    icon: <Tag />,
    name: "Brands",
    subItems: [
      { name: "Add new", path: "/brand/add-new", pro: false },
      { name: "List", path: "/brand/list", pro: false },
    ],
  },

  {
    icon: <GridIcon />,
    name: "Product Specification",
    subItems: [
      { name: "Groups ", path: "/specification/groups", pro: false },
      {
        name: "Attribute ",
        path: "/specification/attributes-list",
        pro: false,
      },
      { name: "Tables ", path: "/specification/tables", pro: false },
    ],
  },
  {
    icon: <GridIcon />,
    name: "Product Attributes",
    subItems: [
      { name: "Create ", path: "/attributes/create", pro: false },
      {
        name: "List ",
        path: "/attributes/list",
        pro: false,
      },
    ],
  },
  {
    icon: <GridIcon />,
    name: "Product Options",
    subItems: [
      { name: "List ", path: "/product-options/list", pro: false },
      { name: "Create", path: "/product-options/create", pro: false },
    ],
  },

  // {
  //   icon: <GridIcon />,
  //   name: "Product Attribute Setup",
  //   path: "/attribute",
  // },

  // {
  //   icon: <Star />,
  //   name: "Product Reviews",
  //   path: "/",
  // },
];

// New Marketplace section
const marketplaceItems: NavItem[] = [
  {
    icon: <Store />,
    name: "Marketplace",
    subItems: [
      { name: "Stores", path: "/marketplace/stores-list", pro: false },
      { name: "Vendors", path: "/vendor/list", pro: false },
      // { name: "Stores Create", path: "/marketplace/store-create", pro: false },
      // { name: "Vendor Performance", path: "/marketplace/analytics/vendor-performance", pro: false },
    ],
  },

  // {
  //   icon: <UserCog />,
  //   name: "Vendors",
  //   subItems: [
  //     { name: "List", path: "/vendor/list", pro: false },
  //     { name: "Create", path: "/vendor/add", pro: false },
  //   ],
  // },
];

const userManagement: NavItem[] = [
  {
    icon: <User />,
    name: "Customers",
    subItems: [{ name: "Customer List", path: "/customer/list", pro: false }],
  },
];

const AppSidebar: React.FC = () => {
  const { isExpanded, isMobileOpen, isHovered, setIsHovered } = useSidebar();
  const pathname = usePathname();

  const [openSubmenu, setOpenSubmenu] = useState<{
    type: MenuType;
    index: number;
  } | null>(null);
  const [subMenuHeight, setSubMenuHeight] = useState<Record<string, number>>(
    {},
  );
  const subMenuRefs = useRef<Record<string, HTMLDivElement | null>>({});

  const isActive = useCallback((path: string) => path === pathname, [pathname]);

  const handleSubmenuToggle = (index: number, menuType: MenuType) => {
    setOpenSubmenu((prevOpenSubmenu) => {
      if (
        prevOpenSubmenu &&
        prevOpenSubmenu.type === menuType &&
        prevOpenSubmenu.index === index
      ) {
        return null;
      }
      return { type: menuType, index };
    });
  };

  const renderMenuItems = (navItems: NavItem[], menuType: MenuType) => (
    <ul className="flex flex-col gap-4">
      {navItems.map((nav, index) => (
        <li key={nav.name}>
          {nav.subItems ? (
            <button
              onClick={() => handleSubmenuToggle(index, menuType)}
              className={`menu-item group ${
                openSubmenu?.type === menuType && openSubmenu?.index === index
                  ? "menu-item-active"
                  : "menu-item-inactive"
              } cursor-pointer ${
                !isExpanded && !isHovered
                  ? "lg:justify-center"
                  : "lg:justify-start"
              }`}
            >
              <span
                className={` ${
                  openSubmenu?.type === menuType && openSubmenu?.index === index
                    ? "menu-item-icon-active"
                    : "menu-item-icon-inactive"
                }`}
              >
                {nav.icon}
              </span>
              {(isExpanded || isHovered || isMobileOpen) && (
                <span className={`menu-item-text`}>{nav.name}</span>
              )}
              {(isExpanded || isHovered || isMobileOpen) && (
                <ChevronDownIcon
                  className={`ml-auto h-5 w-5 transition-transform duration-200 ${
                    openSubmenu?.type === menuType &&
                    openSubmenu?.index === index
                      ? "text-brand-500 rotate-180"
                      : ""
                  }`}
                />
              )}
            </button>
          ) : (
            nav.path && (
              <Link
                href={nav.path}
                className={`menu-item group ${
                  isActive(nav.path) ? "menu-item-active" : "menu-item-inactive"
                }`}
              >
                <span
                  className={`${
                    isActive(nav.path)
                      ? "menu-item-icon-active"
                      : "menu-item-icon-inactive"
                  }`}
                >
                  {nav.icon}
                </span>
                {(isExpanded || isHovered || isMobileOpen) && (
                  <span className={`menu-item-text`}>{nav.name}</span>
                )}
              </Link>
            )
          )}
          {nav.subItems && (isExpanded || isHovered || isMobileOpen) && (
            <div
              ref={(el) => {
                subMenuRefs.current[`${menuType}-${index}`] = el;
              }}
              className="overflow-hidden transition-all duration-300"
              style={{
                height:
                  openSubmenu?.type === menuType && openSubmenu?.index === index
                    ? `${subMenuHeight[`${menuType}-${index}`]}px`
                    : "0px",
              }}
            >
              <ul className="mt-2 ml-9 space-y-1">
                {nav.subItems.map((subItem) => (
                  <li key={subItem.name}>
                    <Link
                      href={subItem.path}
                      className={`menu-dropdown-item ${
                        isActive(subItem.path)
                          ? "menu-dropdown-item-active"
                          : "menu-dropdown-item-inactive"
                      }`}
                    >
                      {subItem.name}
                      <span className="ml-auto flex items-center gap-1">
                        {subItem.new && (
                          <span
                            className={`ml-auto ${
                              isActive(subItem.path)
                                ? "menu-dropdown-badge-active"
                                : "menu-dropdown-badge-inactive"
                            } menu-dropdown-badge`}
                          >
                            new
                          </span>
                        )}
                        {subItem.pro && (
                          <span
                            className={`ml-auto ${
                              isActive(subItem.path)
                                ? "menu-dropdown-badge-active"
                                : "menu-dropdown-badge-inactive"
                            } menu-dropdown-badge`}
                          >
                            pro
                          </span>
                        )}
                      </span>
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          )}
        </li>
      ))}
    </ul>
  );

  useEffect(() => {
    // Check if the current path matches any submenu item
    let submenuMatched = false;

    // Check main menu items
    navItems.forEach((nav, index) => {
      if (nav.subItems) {
        nav.subItems.forEach((subItem) => {
          if (isActive(subItem.path)) {
            setOpenSubmenu({ type: "main", index });
            submenuMatched = true;
          }
        });
      }
    });

    // Check product management items
    othersItems.forEach((nav, index) => {
      if (nav.subItems) {
        nav.subItems.forEach((subItem) => {
          if (isActive(subItem.path)) {
            setOpenSubmenu({ type: "products", index });
            submenuMatched = true;
          }
        });
      }
    });
    // Check marketplace items
    marketplaceItems.forEach((nav, index) => {
      if (nav.subItems) {
        nav.subItems.forEach((subItem) => {
          if (isActive(subItem.path)) {
            setOpenSubmenu({ type: "marketplace", index });
            submenuMatched = true;
          }
        });
      }
    });

    // Check user management items
    userManagement.forEach((nav, index) => {
      if (nav.subItems) {
        nav.subItems.forEach((subItem) => {
          if (isActive(subItem.path)) {
            setOpenSubmenu({ type: "users", index });
            submenuMatched = true;
          }
        });
      }
    });

    // If no submenu item matches, close the open submenu
    if (!submenuMatched) {
      setOpenSubmenu(null);
    }
  }, [pathname, isActive]);

  useEffect(() => {
    // Set the height of the submenu items when the submenu is opened
    if (openSubmenu !== null) {
      const key = `${openSubmenu.type}-${openSubmenu.index}`;
      if (subMenuRefs.current[key]) {
        setSubMenuHeight((prevHeights) => ({
          ...prevHeights,
          [key]: subMenuRefs.current[key]?.scrollHeight || 0,
        }));
      }
    }
  }, [openSubmenu]);

  return (
    <aside
      className={`fixed top-0 left-0 z-50 mt-16 flex h-screen flex-col border-r border-gray-200 bg-white px-5 text-gray-900 transition-all duration-300 ease-in-out lg:mt-0 dark:border-gray-800 dark:bg-gray-900 ${
        isExpanded || isMobileOpen
          ? "w-[290px]"
          : isHovered
            ? "w-[290px]"
            : "w-[90px]"
      } ${isMobileOpen ? "translate-x-0" : "-translate-x-full"} lg:translate-x-0`}
      onMouseEnter={() => !isExpanded && setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <div
        className={`flex py-8 ${
          !isExpanded && !isHovered ? "lg:justify-center" : "justify-start"
        }`}
      >
        <Link href="/">
          {isExpanded || isHovered || isMobileOpen ? (
            <>
              {/* <Image
                className="dark:hidden"
                src="/images/logo/logo.png"
                alt="Logo"
                width={150}
                height={40}
              />
              <Image
                className="hidden dark:block"
                src="/images/logo/logo-dark.svg"
                alt="Logo"
                width={150}
                height={40}
              /> */}
              <p className="text-[25px] font-extrabold">Mercy</p>
            </>
          ) : (
            <Image
              src="/images/logo/logo-icon.svg"
              alt="Logo"
              width={32}
              height={32}
            />
          )}
        </Link>
      </div>
      <div className="no-scrollbar flex flex-col overflow-y-auto pb-[100px] duration-300 ease-linear md:pb-[0px]">
        <nav className="mb-6">
          <div className="flex flex-col gap-4">
            <div>
              <h2
                className={`mb-4 flex text-xs leading-[20px] text-gray-400 uppercase ${
                  !isExpanded && !isHovered
                    ? "lg:justify-center"
                    : "justify-start"
                }`}
              >
                {isExpanded || isHovered || isMobileOpen ? (
                  "Menu"
                ) : (
                  <HorizontaLDots />
                )}
              </h2>
              {renderMenuItems(navItems, "main")}
            </div>

            <div className="">
              <h2
                className={`mb-4 flex text-xs leading-[20px] text-gray-400 uppercase ${
                  !isExpanded && !isHovered
                    ? "lg:justify-center"
                    : "justify-start"
                }`}
              >
                {isExpanded || isHovered || isMobileOpen ? (
                  "Product management"
                ) : (
                  <HorizontaLDots />
                )}
              </h2>
              {renderMenuItems(othersItems, "products")}
            </div>
            {/* New Marketplace section */}
            <div>
              <h2
                className={`mb-4 flex text-xs leading-[20px] text-gray-400 uppercase ${!isExpanded && !isHovered ? "lg:justify-center" : "justify-start"}`}
              >
                {isExpanded || isHovered || isMobileOpen ? (
                  "Marketplace"
                ) : (
                  <HorizontaLDots />
                )}
              </h2>
              {renderMenuItems(marketplaceItems, "marketplace")}
            </div>
            <div>
              <h2
                className={`mb-4 flex text-xs leading-[20px] text-gray-400 uppercase ${!isExpanded && !isHovered ? "lg:justify-center" : "justify-start"}`}
              >
                {isExpanded || isHovered || isMobileOpen ? (
                  "User management"
                ) : (
                  <HorizontaLDots />
                )}
              </h2>
              {renderMenuItems(userManagement, "users")}
            </div>
          </div>
        </nav>
        {isExpanded || isHovered || isMobileOpen ? "" : null}
      </div>
    </aside>
  );
};

export default AppSidebar;
