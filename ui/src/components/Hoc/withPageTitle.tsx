import Text from "components/General/Text/Text";
import usePageTitle from "components/Hoc/utils/hooks/usePageTitle";

const withPageTitle = <T extends object>(
	WrappedComponent: React.ComponentType<T>
) => {
	const WithPageTitle = (props: T) => {
		const title = usePageTitle();

		return (
			<>
				<Text text={title} level={3} />
				<br />
				<WrappedComponent {...props} />
			</>
		);
	};

	return WithPageTitle;
};

export default withPageTitle;
