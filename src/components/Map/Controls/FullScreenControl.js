import {
	useContext,
	useEffect
} from "react";
import {
	FullScreen
} from "ol/control";

import MapContext from "../MapContext";

/* Used to load map full screen */
const FullScreenControl = () => {
	const {
		map
	} = useContext(MapContext);

	useEffect(() => {
		if (!map) return;
		let fullScreenControl = new FullScreen({});
		map.controls.push(fullScreenControl);
		return () => map.controls.remove(fullScreenControl);
	}, [map]);

	return null;
};

export default FullScreenControl;