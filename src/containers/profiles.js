import { Header, Profiles } from "../components";
import * as ROUTES from '../constants/routes';
import logo from '../logo.svg';

export default function SelectProfileContainer({ user, setProfile, isLoading }) {
  return <>
    <Header bg={ false }>
      <Header.Frame>
        <Header.Logo to={ ROUTES.BROWSE } src={ logo } alt="Netflix"/>
      </Header.Frame>
    </Header>

    <Profiles>
      <Profiles.Title>Who's watching?</Profiles.Title>
      <Profiles.List>
        <Profiles.User onClick={ () => setProfile({ displayName: user.displayName, photoURL: user.photoURL }) } isLoading={isLoading}>
          <Profiles.Picture src={ user.photoURL } isLoading={isLoading}/>
          <Profiles.Name>{ user.displayName }</Profiles.Name>
        </Profiles.User>
      </Profiles.List>
    </Profiles>
  </>;
};