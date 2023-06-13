import {
    Breadcrumb,
    BreadcrumbItem,
    BreadcrumbLink,
    BreadcrumbSeparator,   
} from "@chakra-ui/react";

import {
    ChevronRightIcon,
} from "@chakra-ui/icons";

import { Link, useLocation } from "@remix-run/react";

export function BreadCrumbs() {
    const location = useLocation();

    const path = location.pathname.split("/").filter(Boolean);

    return (
        <Breadcrumb
            spacing="8px"
            separator={<ChevronRightIcon color="gray.500" />}
            fontSize="sm"
            mb={8}
        >
            <BreadcrumbItem>
                <BreadcrumbLink as={Link} to="/">
                    Home
                </BreadcrumbLink>
            </BreadcrumbItem>

            {path.map((link, index) => {
                const url = `/${path.slice(0, index + 1).join("/")}`;
                return (
                    <BreadcrumbItem key={url}>
                        <BreadcrumbLink as={Link} to={url}>
                            {link}
                        </BreadcrumbLink>
                    </BreadcrumbItem>
                );
            })}
        </Breadcrumb>
    );
}