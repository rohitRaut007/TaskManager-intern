import { HomeIcon, ChartBarIcon, ClipboardDocumentListIcon,ArrowLeftStartOnRectangleIcon, Cog6ToothIcon } from '@heroicons/react/24/outline';

export default function Sidebar() {
  const navigation = [
    { name: 'Dashboard', icon: HomeIcon, href: '#', current: true },
    { name: 'Tasks', icon: ClipboardDocumentListIcon, href: '/Tasks', current: false },
    { name: 'Analytics', icon: ChartBarIcon, href: '#', current: false },
    { name: 'Logout', icon: ArrowLeftStartOnRectangleIcon, href: '#', current: false },
  ];

  return (
    <div className="flex h-full flex-col w-64" style={{ backgroundColor: '#158380' }} >
      <div className="flex h-16 items-center px-4">
        <h1 className="text-white text-xl font-bold">Task Manager</h1>
      </div>
      <nav className="flex-1 space-y-1 px-2 py-4">
        {navigation.map((item) => (
          <a
            key={item.name}
            href={item.href}
            className={`
              group flex items-center px-2 py-2 text-sm font-medium rounded-md
              ${item.current
                ? 'bg-gray-900 text-white'
                : 'text-gray-300 hover:bg-gray-700 hover:text-white'
              }
            `}
          >
            <item.icon
              className="mr-3 h-6 w-6 flex-shrink-0"
              aria-hidden="true"
            />
            {item.name}
          </a>
        ))}
      </nav>
    </div>
  );
}