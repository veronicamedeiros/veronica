import java.util.Random;

public class MegaSena {
    public static void main(String[] args) {


        for (int indice = 1; indice <= 6; indice++){
            Random generate = new Random();
            int number = generate.nextInt(60);
            System.out.println(number);
        }

    }
}
