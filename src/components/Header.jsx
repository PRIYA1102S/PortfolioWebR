import MailIconLink from './MailIconLink';

const Header = () => {
    return (
        <nav className="bg-navy-dark"> {/* Adjust this class name according to your Tailwind setup for correct color */}
            <div className="flex justify-center items-center w-full bg-navy-dark"> {/* Ensures the div also has the same background color */}
                <MailIconLink />
            </div>
        </nav>
    );
};

export default Header;
