import React from 'react';
import renderer from 'react-test-renderer';
import ButtonEntrar from './ButtonEntrar';
import {TouchableOpacity, Image} from "react-native";

describe('Teste ButtonEntrar', () => {
    it('verifica_se_existe_touchableOpacity', () => {
        const testRenderer = renderer.create(
            <ButtonEntrar onPress={() => {}} />
        );
        const testInstance = testRenderer.root;

        const button = testInstance.findByType(TouchableOpacity);
        expect(button).toBeTruthy();
    });
    it('verifica_se_tem_imagem', () => {
        const testRenderer = renderer.create(
            <ButtonEntrar onPress={() => {}} />
        );
        const testInstance = testRenderer.root;

        const image = testInstance.findByType(Image);
        expect(image.props.source).toEqual(require("../../assets/images/BUTTON_ENTRAR.png"));
    });
    it('verifica_click_no_botao', () => {
        const onPress = jest.fn();
        const testRenderer = renderer.create(
            <ButtonEntrar onPress={onPress} />
        );
        const testInstance = testRenderer.root;

        const button = testInstance.findByType(TouchableOpacity);
        button.props.onPress();
        expect(onPress).toHaveBeenCalled();
    });

});
