import { RiUser3Fill } from "react-icons/ri";
import { FaCrown } from "react-icons/fa6";
import { APP_FEATURES, USER_FEATURES } from "./sidebar.constant";

export const Sidebar = () => {
  //TODO: Add selection logic
  //TODO: user-feature should be draggable and can change their position
  return (
    <div
      id="sidebar"
      className="h-full flex flex-col items-center bg-[--left-sidebar-bg-color]
    border-solid border-[--border-gray-5] pb-5 px-1"
    >
      <div id="user-profile" className="mb-3 mt-4 relative">
        <div className="h-8 w-8 bg-[#F1F1F1] rounded-md border flex justify-center items-end">
          <RiUser3Fill className="h-6 w-6 text-[--icon-color] opacity-40" />
        </div>
        <FaCrown className="absolute top-[-4px] right-[-4px] h-3 w-3 text-[#FF8E0A] opacity-70" />
      </div>
      <div id="user-features" className="flex flex-col flex-auto items-center">
        {USER_FEATURES.map((feature) => {
          const IconComponent = feature.icon;
          return (
            <div
              key={feature.id}
              className="p-1 w-10 h-10 flex justify-center items-center"
            >
              <IconComponent className="h-[22px] w-[22px] text-[--icon-color] opacity-40 hover:opacity-100" />
            </div>
          );
        })}
      </div>
      <div id="app-features" className="flex-none">
        {APP_FEATURES.map((feature) => {
          const IconComponent = feature.icon;
          return (
            <div key={feature.id} className="h-[22px] w-[22px] mb-6 last:mb-0">
              <IconComponent className="h-full w-full text-[--icon-color] opacity-40 hover:opacity-100" />
            </div>
          );
        })}
      </div>
    </div>
  );
};
