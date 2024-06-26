import React from 'react';
import { TextInput } from 'react-native';
import InputText from './InputText';
import {render} from "@testing-library/react-native";

describe('InputText Component', () => {
    it('verifica_se_label_foi_desenhado_na_tela', () => {
        const {getByText} = render(
            <InputText
                label="Usuário"
                value=""
                placeholder="Digite seu nome de usuário"
                onChangeText={() => {}}
                secureTextEntry={undefined}
            />
        );

        expect(getByText('Usuário')).toBeTruthy();
    });

    it('verifica_se_label_foi_desenhado_na_tela', () => {
        const {getByPlaceholderText} = render(
            <InputText
                label="Usuário"
                value=""
                placeholder="Digite seu nome de usuário"
                onChangeText={() => {}}
                secureTextEntry={undefined}
            />
        );

        expect(getByPlaceholderText('Digite seu nome de usuário')).toBeTruthy();
    });
});
