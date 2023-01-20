export type ProfileType = {
  name: string;
};

export const Profile = ({ name }: ProfileType) => {
  return <div>private profile.Name is {name}</div>;
};
