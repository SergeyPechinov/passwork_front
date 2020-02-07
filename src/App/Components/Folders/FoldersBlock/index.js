import React, {Component} from "react";
import './Style.scss';
import IconsPlus from "../../UI/Icons/Plus/iconPlus";
import Input from "../../UI/Input";
import IconApply from "../../UI/Icons/Apply/iconApply";
import IconDelete from "../../UI/Icons/Delete/iconDelete";
import {getFolders} from "../../../Constants/Js/Folders";
import FolderRow from "../FolderRow";
import {foldersGet} from "../../../../Redux/Actions/Folders";
import {connect} from 'react-redux';

class FoldersBlock extends Component {
	componentDidMount() {
		getFolders(this, data => {
			this.props.foldersGet(data.data);
		});
	}

	render() {
		return (
				<div className={`password-folders ${this.props.class ? this.props.class : ''}`}>
					<div className="password-folders__top">
						<h3 className="password-folders__title">Папки</h3>
						<button className={'password-folders__button-add'}><IconsPlus/></button>
					</div>
					{this.props.folders ? <FolderRow folders={this.props.folders} parent={0}/> : null}
				</div>
		);
	}
}

const mapStateToProps = state => ({
	folders: state.folders.folders,
});

const mapDispatchToProps = {
	foldersGet,
};

export default connect(mapStateToProps, mapDispatchToProps)(FoldersBlock);