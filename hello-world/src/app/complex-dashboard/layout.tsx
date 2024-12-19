
const ComplexDashboardLayout = ({
    children,
    names,
    footer,
    login
}: {
    children: React.ReactNode;
    names: React.ReactNode;
    footer: React.ReactNode;
    login: React.ReactNode;
}) => {

    const isLoggedIn = false
    return isLoggedIn ? (
        <div>
            <div className="my-5">
                {children}
            </div>
        </div>
    ) 
    :
    <div>
        {login}
    </div>
}

export default ComplexDashboardLayout;