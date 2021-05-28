// import { RootDispatch, RootState } from "@store";
// import { setLoading } from "@store/app";
// import { connect, ConnectedProps } from "react-redux";
import css from "./Main.module.scss";

// const mapState = ({ appReducer: { loading } }: RootState) => ({
//   loading,
// });

// const mapDispatch = (dispatch: RootDispatch) => ({
//   setLoading: (loading: boolean) => dispatch(setLoading(loading)),
// });

// const connector = connect(mapState, mapDispatch);

// type PropsFromState = ConnectedProps<typeof connector>;
// type Props = PropsFromState;

export function Main() {
  return (
    <div id={css.main}>
      {/* <button onClick={() => setLoading(!loading)}>moin</button> */}
      hello main
      {/* <h1>{loading ? "sdak" : "aaaaa"}</h1> */}
    </div>
  );
}

// export const Main = connector(MainUI);

export default Main;
