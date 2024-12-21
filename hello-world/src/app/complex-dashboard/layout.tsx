
const ComplexDashboardLayout = ({
    children,
    names,
}: {
    children: React.ReactNode;
    names: React.ReactNode;
}) => {
    return (
        <>
            <div>
                {names}
            </div>
            {children}
        </>
    )
}


export default ComplexDashboardLayout;