import React from 'react';
import renderer from 'react-test-renderer';
import InputText from "./InputText";

describe('Teste InputText', () => {
    it('verifica_o_valor_atual', () => {
        const testRenderer = renderer.create(
            <InputText
                label="Usuário"
                value="test@example.com"
                placeholder="Digite seu nome de usuário"
                onChangeText={() => {}}
            />
        );
        const testInstance = testRenderer.root;

        const input = testInstance.findByType('TextInput');
        expect(input.props.value).toBe('test@example.com');
    });

    it('verifica_alteracao_de_valor', () => {
        const onChangeText = jest.fn();
        const testRenderer = renderer.create(
            <InputText
                label="Usuário"
                value=""
                placeholder="Digite seu nome de usuário"
                onChangeText={onChangeText} secureTextEntry={undefined}
            />
        );
        const testInstance = testRenderer.root;

        const input = testInstance.findByType('TextInput');
        input.props.onChangeText('eliezer');
        expect(onChangeText).toHaveBeenCalledWith('eliezer');
    });

    it('verifica_campo_senha', () => {
        const testRenderer = renderer.create(
            <InputText
                label="Usuário"
                value=""
                placeholder="Digite seu nome de usuário"
                secureTextEntry
                onChangeText={() => {}}
            />
        );
        const testInstance = testRenderer.root;

        const input = testInstance.findByType('TextInput');
        expect(input.props.secureTextEntry).toBe(true);
    });

    it('verifica_o_valor_placeholder', () => {
        const testRenderer = renderer.create(
            <InputText
                label="Usuário"
                value=""
                placeholder="Digite seu nome de usuário"
                onChangeText={() => {
                }} secureTextEntry={undefined}
            />
        );
        const testInstance = testRenderer.root;

        const input = testInstance.findByType('TextInput');
        expect(input.props.placeholder).toBe('Digite seu nome de usuário');
    });

    it('verifica_o_valor_label', () => {
        const testRenderer = renderer.create(
            <InputText
                label="Usuário"
                value=""
                placeholder="Digite seu nome de usuário"
                onChangeText={() => {}}
            />
        );
        const testInstance = testRenderer.root;

        const label = testInstance.findByProps({children: 'Usuário'});
        expect(label).toBeTruthy();
    });


});
