import { Profile } from '../../ui/_components/profile';

export function AboutPage() {
  return (
    <div className="sm:w-3/5 mx-auto py-40 text-gray_01 px-3">
      <div className="flex sm:flex-row flex-col">
        <Profile />
        <div className="flex flex-col mt-20 sm:mt-0 sm:w-2/3 sm:ml-auto">
          <h1>AboutPage</h1>
        </div>
      </div>
    </div>
  );
}
