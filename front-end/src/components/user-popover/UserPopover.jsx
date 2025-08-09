import './user-popover.css';

function UserPopover() {

const options = [
    { label: 'Profile', onClick: () => { /* handle profile */ } },
    { label: 'Settings', onClick: () => { /* handle settings */ } },
    { label: 'Logout', onClick: () => { /* handle logout */ } },
];

return (
    <div className="bg-white border rounded shadow-lg p-2 w-50">
        <div className="d-flex flex-column">
            {options.map((option, idx) => (
                <div key={option.label} className="p-1">
                    <span
                        className="sub-menu-item  rounded"
                        onClick={option.onClick}
                    >
                        {option.label}
                    </span>
                </div>
            ))}
        </div>
    </div>
)
}

export default UserPopover