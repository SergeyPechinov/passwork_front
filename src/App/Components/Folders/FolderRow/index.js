import React, {Component, Fragment} from 'react';
import './Style.scss';
import IconFolder from "../../UI/Icons/Folder/iconFolder";
import Input from "../../UI/Input";
import IconApply from "../../UI/Icons/Apply/iconApply";
import IconDelete from "../../UI/Icons/Delete/iconDelete";

class FolderRow extends Component {
	state = {
		parent: this.props.parent === 0 ? this.minValue() : this.props.parent,
	};

	minValue() {
		let min = 0;

		this.props.folders.map(item => {
			if (item.id_folder_parent < min) {
				min = item.id_folder_parent;
			}
		});

		return min;
	}

	needValue(value) {
		let result = false;

		this.props.folders.map(item => {
			if (item.id_folder_parent === value) {
				result = true;
			}
		});

		return result;
	};

	render() {

		return (
				<Fragment>
					{this.props.folders.length > 0 ?
							this.props.folders.map(item =>
									item.id_folder_parent === this.state.parent ?
											<div key={item.id} className={`password-folders__folders`}>
												<div className="password-folders__folder">
													<IconFolder class={'password-folders__folder-icon'}/>
													<span className="password-folders__folder-name">{item.name}</span>
												</div>
												{this.needValue(item.id) ? <FolderRow folders={this.props.folders} parent={item.id}/> : null}
												{
													5 !== 5 ?
															<div className="password-folders__add-row">
																<Input class={'password-folders__input-add'} placeholder={"Добавить папку"}/>
																<button className={'password-folders__input-add-add'}>
																	<IconApply/>
																</button>
																<button className={'password-folders__input-add-remove'}><IconDelete/></button>
															</div>
															: null
												}
											</div> : null
							) :
							<div className="password-folders__add-row">
								<Input class={'password-folders__input-add'} placeholder={"Добавить папку"}/>
								<button className={'password-folders__input-add-add'}>
									<IconApply/>
								</button>
							</div>
					}
				</Fragment>
		);
	}
}

export default FolderRow;