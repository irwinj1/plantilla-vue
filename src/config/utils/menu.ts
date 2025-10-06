interface MenuItem {
    nombre: string,
    uri: string,
    icon: string
}
export const menu: MenuItem[] = [
    {
        nombre: "Inicio",
        uri: "/",
        icon: "mdi-view-dashboard"
    },
    {
        nombre:"Ventas",
        uri:"/ventas",
        icon:"mdi-cart-outline"
    },
    {
        nombre:"Gatos",
        uri:"/gastos",
        icon:"mdi-network-pos"
    }
]