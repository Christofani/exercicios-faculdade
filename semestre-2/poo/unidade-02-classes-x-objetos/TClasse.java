import src.Carro;

public class TClasse {
  public static void main(String[] args) {
    Carro carro = new Carro();

    carro.setMotor("2.0");
    carro.setCor("Azul");
    carro.setMarca("Pegeout");

    System.out.println("Motor : " + carro.getMotor() + ", Cor : " + carro.getCor() + ", Marca : " + carro.getMarca());
  }
}
