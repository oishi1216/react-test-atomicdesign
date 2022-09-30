import { PrimaryButton } from "./components/atoms/button/PrimaryButton";
import { SecondaryButton } from "./components/atoms/button/SecondaryButton";
import { SearchInput } from "./components/molecules/Searchinput";
import { UserCard } from "./components/organisms/user/UserCard";

const user = {
  name: "名無し",
  image: "https://source.unsplash.com/NE0XGVKTmcA",
  email: "12345@example.com",
  phone: "050-1111-2222",
  company: {
    name: "テスト株式会社"
  },
  website: "https://google.com"
}

function App() {
  return (
    <>
      <PrimaryButton>テスト</PrimaryButton>
      <SecondaryButton>検索</SecondaryButton>
      <SearchInput />
      <UserCard user={user} />
    </>

  );
}

export default App;
