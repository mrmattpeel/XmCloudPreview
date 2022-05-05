import { Text, Field, RichText } from '@sitecore-jss/sitecore-jss-nextjs';

type HeaderProps = {
    fields: {
        Heading: Field<string>,
        Content: Field<string>
    };
}

const Header = (props: HeaderProps): JSX.Element => (
    <div>
        <h1>Boom!</h1>
        <Text field={props.fields.Heading} />
        <RichText field={props.fields.Content} />
    </div>
);

export default Header;