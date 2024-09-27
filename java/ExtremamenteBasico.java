import java.io.IOException;
import java.util.Scanner;

public class ExtremamenteBasico {
    
    public static void main(String[] args) throws IOException{
        Scanner ler = new Scanner(System.in);

        int valorA = ler.nextInt();
        int valorB = ler.nextInt();

        int soma = valorA + valorB;
        System.out.println("X = " + soma);
    }
}
