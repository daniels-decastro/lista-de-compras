import { useState } from 'react';
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  FlatList,
  StyleSheet,
} from 'react-native';
import { StatusBar } from 'expo-status-bar';

export default function App() {
  const [texto, setTexto] = useState('');
  const [itens, setItens] = useState([]);

  function adicionarItem() {
    const nome = texto.trim();
    if (nome === '') return;

    // Cria um array NOVO com o spread operator (sem usar .push())
    setItens([...itens, { id: String(Date.now()), nome }]);
    setTexto('');
  }

  return (
    <View style={styles.container}>
      <StatusBar style="light" />

      <View style={styles.cabecalho}>
        <Text style={styles.titulo}>🛒 Lista de Compras</Text>
        <Text style={styles.subtitulo}>
          {itens.length} {itens.length === 1 ? 'item' : 'itens'} na lista
        </Text>
      </View>

      <View style={styles.linhaEntrada}>
        <TextInput
          style={styles.input}
          placeholder="Digite um novo item..."
          placeholderTextColor="#888"
          value={texto}
          onChangeText={setTexto}
          onSubmitEditing={adicionarItem}
        />
        <TouchableOpacity style={styles.botao} onPress={adicionarItem}>
          <Text style={styles.textoBotao}>Adicionar</Text>
        </TouchableOpacity>
      </View>

      <FlatList
        data={itens}
        keyExtractor={(item) => item.id}
        contentContainerStyle={styles.lista}
        renderItem={({ item, index }) => (
          <View style={styles.item}>
            <Text style={styles.numeroItem}>{index + 1}.</Text>
            <Text style={styles.textoItem}>{item.nome}</Text>
          </View>
        )}
        ListEmptyComponent={
          <Text style={styles.vazio}>
            Sua lista está vazia. Adicione o primeiro item!
          </Text>
        }
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f4f6f8',
  },
  cabecalho: {
    backgroundColor: '#2e7d32',
    paddingTop: 60,
    paddingBottom: 20,
    paddingHorizontal: 20,
  },
  titulo: {
    color: '#ffffff',
    fontSize: 28,
    fontWeight: 'bold',
  },
  subtitulo: {
    color: '#c8e6c9',
    fontSize: 14,
    marginTop: 4,
  },
  linhaEntrada: {
    flexDirection: 'row',
    padding: 20,
    gap: 10,
  },
  input: {
    flex: 1,
    minWidth: 0,
    backgroundColor: '#ffffff',
    borderWidth: 1,
    borderColor: '#cccccc',
    borderRadius: 8,
    paddingHorizontal: 12,
    paddingVertical: 10,
    fontSize: 16,
  },
  botao: {
    backgroundColor: '#2e7d32',
    borderRadius: 8,
    paddingHorizontal: 16,
    justifyContent: 'center',
  },
  textoBotao: {
    color: '#ffffff',
    fontSize: 16,
    fontWeight: 'bold',
  },
  lista: {
    paddingHorizontal: 20,
    paddingBottom: 20,
  },
  item: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#ffffff',
    borderRadius: 8,
    padding: 14,
    marginBottom: 10,
    borderLeftWidth: 4,
    borderLeftColor: '#2e7d32',
  },
  numeroItem: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#2e7d32',
    marginRight: 10,
  },
  textoItem: {
    fontSize: 16,
    color: '#333333',
  },
  vazio: {
    textAlign: 'center',
    color: '#888888',
    fontSize: 16,
    marginTop: 40,
  },
});
